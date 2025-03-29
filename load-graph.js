// llmLoadGraph.js
// Render an LLM provider load graph into a provided canvas context, using user-local time and day

export function renderLLMLoadGraph(canvas, options = {}) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  const now = new Date();
  const currentHour = now.getHours();
  const isWeekend = now.getDay() === 0 || now.getDay() === 6;

  // Update the day type text
  const dayTypeElement = document.getElementById('day-type');
  if (dayTypeElement) {
    dayTypeElement.textContent = `(${isWeekend ? 'weekend' : 'weekday'})`;
  }

  const providers = [
    {
      name: "ChatGPT",
      color: "#ff6384",
      weekdayPeaks: [11, 17, 0],
      weekendPeaks: [13, 18],
      weekendScale: 0.7  // Weekend peaks are 70% of weekday peaks
    },
    {
      name: "Claude",
      color: "#36a2eb",
      weekdayPeaks: [16, 20, 1],
      weekendPeaks: [17, 21],
      weekendScale: 0.65  // Weekend peaks are 65% of weekday peaks
    },
    {
      name: "Grok",
      color: "#cc65fe",
      weekdayPeaks: [0, 18],
      weekendPeaks: [1, 19],
      weekendScale: 0.75  // Weekend peaks are 75% of weekday peaks
    },
    {
      name: "Bing AI",
      color: "#ffce56",
      weekdayPeaks: [11, 17],
      weekendPeaks: [12, 18],
      weekendScale: 0.7  // Weekend peaks are 70% of weekday peaks
    },
  ];

  function generateCurve(peaks, weekendScale = 1) {
    // Generate points at 5-minute intervals (193 points for 24 hours)
    const numPoints = 193; // 24 hours * 12 points per hour + 1 for wrapping
    const points = new Array(numPoints).fill(0);
    
    for (const peak of peaks) {
      for (let i = 0; i < numPoints; i++) {
        const hour = (i / 12); // Convert point index to hour
        const dist = Math.min(
          Math.abs(hour - peak),
          Math.abs(hour - peak + 24),
          Math.abs(hour - peak - 24)
        );
        // Tighter Gaussian falloff to maintain distinct peaks
        const gaussian = Math.exp(-0.5 * (dist / 2.2) ** 2);
        points[i] += gaussian;
      }
    }
    
    // Normalize the values and apply weekend scaling if needed
    const max = Math.max(...points);
    return points.map(v => (v / max) * weekendScale);
  }

  const curves = providers.map(p => {
    const peaks = isWeekend ? p.weekendPeaks : p.weekdayPeaks;
    const scale = isWeekend ? p.weekendScale : 1;
    return generateCurve(peaks, scale);
  });

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Background
  ctx.fillStyle = "#f9f9f9";
  ctx.fillRect(0, 0, width, height);
  
  // Draw grid
  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  
  // Vertical grid lines (hours)
  ctx.beginPath();
  for (let i = 0; i <= 24; i += 2) {
    const x = (i / 24) * width;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }
  
  // Horizontal grid lines
  ctx.beginPath();
  for (let i = 0; i <= 4; i++) {
    const y = (i / 4) * height;
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();

  // Draw x-axis labels (hours)
  ctx.fillStyle = "#666";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "center";
  for (let i = 0; i <= 24; i += 4) {
    const x = (i / 24) * width;
    ctx.fillText(`${i}:00`, x, height - 5);
  }

  // Helper function to get point coordinates
  function getPoint(i, value) {
    return {
      x: (i / 192) * width,
      y: height - value * height * 0.8 - 20
    };
  }

  // Helper function to calculate slope between two points
  function getSlope(p1, p2) {
    return Math.abs((p2.y - p1.y) / (p2.x - p1.x));
  }

  // Helper function to get control points with dynamic tension
  function getControlPoints(p0, p1, p2, p3) {
    // Calculate slopes
    const slope1 = getSlope(p0, p2);
    const slope2 = getSlope(p1, p3);
    
    // Adjust tension based on slope (more responsive to local changes)
    const baseTension = 0.25;
    const tension1 = baseTension / (1 + slope1 * 0.3);
    const tension2 = baseTension / (1 + slope2 * 0.3);
    
    const dx1 = p2.x - p0.x;
    const dx2 = p3.x - p1.x;
    
    // Calculate control points with refined tension adjustment
    return {
      cp1: {
        x: p1.x + dx1 * tension1,
        y: p1.y + (p2.y - p0.y) * tension1 * 0.4
      },
      cp2: {
        x: p2.x - dx2 * tension2,
        y: p2.y - (p3.y - p1.y) * tension2 * 0.4
      }
    };
  }

  // Draw curves with better styling
  providers.forEach((provider, index) => {
    const curve = curves[index];
    
    // Draw filled area under curve
    ctx.fillStyle = `${provider.color}33`; // Add transparency
    ctx.beginPath();
    
    // Start at the bottom left
    ctx.moveTo(0, height - 20);
    
    // Draw the curve
    for (let i = 0; i < curve.length; i++) {
      const p1 = getPoint(i, curve[i]);
      
      if (i === 0) {
        ctx.lineTo(p1.x, p1.y);
      } else {
        const p0 = getPoint(Math.max(0, i - 2), curve[Math.max(0, i - 2)]);
        const prevP = getPoint(i - 1, curve[i - 1]);
        const nextP = getPoint(Math.min(curve.length - 1, i + 1), curve[Math.min(curve.length - 1, i + 1)]);
        
        const { cp1, cp2 } = getControlPoints(p0, prevP, p1, nextP);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p1.x, p1.y);
      }
    }
    
    // Complete the filled area
    ctx.lineTo(width, height - 20);
    ctx.closePath();
    ctx.fill();
    
    // Draw curve line
    ctx.strokeStyle = provider.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Draw the curve
    for (let i = 0; i < curve.length; i++) {
      const p1 = getPoint(i, curve[i]);
      
      if (i === 0) {
        ctx.moveTo(p1.x, p1.y);
      } else {
        const p0 = getPoint(Math.max(0, i - 2), curve[Math.max(0, i - 2)]);
        const prevP = getPoint(i - 1, curve[i - 1]);
        const nextP = getPoint(Math.min(curve.length - 1, i + 1), curve[Math.min(curve.length - 1, i + 1)]);
        
        const { cp1, cp2 } = getControlPoints(p0, prevP, p1, nextP);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p1.x, p1.y);
      }
    }
    ctx.stroke();
  });

  // Draw weekday peak reference line if it's a weekend
  if (isWeekend) {
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    
    // Draw at the weekday peak level (where value would be 1.0)
    const peakY = height - 1.0 * height * 0.8 - 20;
    ctx.moveTo(0, peakY);
    ctx.lineTo(width, peakY);
    ctx.stroke();
    
    // Add label
    ctx.fillStyle = "#666";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("Weekday Peak", width - 10, peakY - 5);
    
    // Reset dash pattern
    ctx.setLineDash([]);
  }

  // Draw current time indicator
  const nowX = (currentHour + now.getMinutes() / 60) / 24 * width;
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.setLineDash([5, 3]);
  ctx.moveTo(nowX, 0);
  ctx.lineTo(nowX, height - 20);
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw current time label
  ctx.fillStyle = "#000";
  ctx.font = "bold 12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Now", nowX, 15);

  // Draw legend
  const legendX = 15;
  let legendY = 25;
  ctx.textAlign = "left";
  providers.forEach((p, i) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(legendX, legendY - 8, 15, 8);
    ctx.fillStyle = "#555";
    ctx.font = "12px sans-serif";
    ctx.fillText(p.name, legendX + 20, legendY);
    legendY += 20;
  });
}

// Usage:
// const canvas = document.getElementById("yourCanvasId");
// import { renderLLMLoadGraph } from "./llmLoadGraph.js";
// renderLLMLoadGraph(canvas);
