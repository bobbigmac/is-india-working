document.addEventListener('DOMContentLoaded', () => {
    // Update times every second
    updateTimes();
    setInterval(updateTimes, 1000);
});

function updateTimes() {
    // Get current local time
    const now = new Date();
    
    // Display local time
    document.getElementById('local-time').textContent = formatTime(now);
    
    // Calculate and display India time (IST is UTC+5:30)
    const indiaTime = getIndiaTime(now);
    document.getElementById('india-time').textContent = formatTime(indiaTime, true);
    
    // Check if India is working
    const isWorking = isIndiaWorking(indiaTime);
    
    // Update status display
    updateStatus(isWorking, now, indiaTime);
}

function getIndiaTime(localTime) {
    // Create a new date object with the current time
    const indiaTime = new Date(localTime);
    
    // Get the local time zone offset in minutes and convert to milliseconds
    const localOffset = localTime.getTimezoneOffset() * 60000;
    
    // IST is UTC+5:30 (330 minutes ahead of UTC)
    const istOffset = 330 * 60000;
    
    // Adjust the time to IST
    indiaTime.setTime(indiaTime.getTime() + localOffset + istOffset);
    
    return indiaTime;
}

function isIndiaWorking(indiaTime) {
    const day = indiaTime.getDay();
    const hours = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();
    
    // Convert time to decimal hours for easier comparison
    const timeInDecimal = hours + (minutes / 60);
    
    // Check if it's a weekday (Monday to Friday)
    const isWeekday = day >= 1 && day <= 5;
    
    // Check if it's between 9:00 AM and 6:00 PM IST
    const isDuringWorkHours = timeInDecimal >= 9 && timeInDecimal < 18;
    
    // Check if it's a public holiday
    const isHoliday = isIndianHoliday(indiaTime);
    
    return isWeekday && isDuringWorkHours && !isHoliday;
}

function isIndianHoliday(date) {
    // Get date components
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const year = date.getFullYear();
    
    // Set of major Indian national holidays (fixed dates)
    // Format: "MM-DD"
    const fixedHolidays = {
        "01-26": "Republic Day",        // January 26
        "08-15": "Independence Day",    // August 15
        "10-02": "Gandhi Jayanti",      // October 2
        "12-25": "Christmas",           // December 25
    };
    
    // Check if today is a fixed holiday
    const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    if (fixedHolidays[dateKey]) {
        return true;
    }
    
    // Variable holidays by year
    // These change each year based on lunar calendar, religious observations, etc.
    const variableHolidays = {
        // 2023 holidays
        "2023": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-08": "Holi",
            "04-07": "Good Friday",
            "04-22": "Eid ul-Fitr",
            "06-29": "Eid al-Adha",
            "08-30": "Raksha Bandhan",
            "09-07": "Janmashtami",
            "10-24": "Dussehra",
            "11-12": "Diwali",
            "11-27": "Guru Nanak Jayanti"
        },
        // 2024 holidays
        "2024": {
            "01-01": "New Year's Day",
            "01-15": "Makar Sankranti",
            "03-25": "Holi",
            "03-29": "Good Friday",
            "04-11": "Eid ul-Fitr",
            "06-17": "Eid al-Adha",
            "08-19": "Raksha Bandhan",
            "08-26": "Janmashtami",
            "10-12": "Dussehra",
            "11-01": "Diwali",
            "11-15": "Guru Nanak Jayanti"
        },
        // 2025 holidays
        "2025": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-14": "Holi",
            "04-18": "Good Friday",
            "04-01": "Eid ul-Fitr",
            "06-07": "Eid al-Adha",
            "08-09": "Raksha Bandhan",
            "08-15": "Janmashtami",
            "10-02": "Dussehra",
            "10-21": "Diwali",
            "11-05": "Guru Nanak Jayanti"
        },
        // 2026 holidays (projected dates)
        "2026": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-04": "Holi",
            "04-03": "Good Friday",
            "03-22": "Eid ul-Fitr",
            "05-29": "Eid al-Adha",
            "07-29": "Raksha Bandhan",
            "08-05": "Janmashtami",
            "09-21": "Dussehra",
            "10-10": "Diwali",
            "10-24": "Guru Nanak Jayanti"
        },
        // 2027 holidays (projected dates)
        "2027": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-24": "Holi",
            "03-26": "Good Friday",
            "03-12": "Eid ul-Fitr",
            "05-19": "Eid al-Adha",
            "08-17": "Raksha Bandhan",
            "08-25": "Janmashtami",
            "10-10": "Dussehra",
            "10-29": "Diwali",
            "11-13": "Guru Nanak Jayanti"
        },
        // 2028 holidays (projected dates)
        "2028": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-12": "Holi",
            "04-14": "Good Friday",
            "02-29": "Eid ul-Fitr",
            "05-07": "Eid al-Adha",
            "08-06": "Raksha Bandhan",
            "08-13": "Janmashtami",
            "09-28": "Dussehra",
            "10-17": "Diwali",
            "11-02": "Guru Nanak Jayanti"
        },
        // 2029 holidays (projected dates)
        "2029": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-02": "Holi",
            "03-30": "Good Friday",
            "02-18": "Eid ul-Fitr",
            "04-27": "Eid al-Adha",
            "07-26": "Raksha Bandhan",
            "08-02": "Janmashtami",
            "09-18": "Dussehra",
            "10-06": "Diwali",
            "10-22": "Guru Nanak Jayanti"
        },
        // 2030 holidays (projected dates)
        "2030": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-21": "Holi",
            "04-19": "Good Friday",
            "02-07": "Eid ul-Fitr",
            "04-16": "Eid al-Adha",
            "08-15": "Raksha Bandhan",
            "08-22": "Janmashtami",
            "10-08": "Dussehra",
            "10-26": "Diwali",
            "11-10": "Guru Nanak Jayanti"
        }
    };
    
    // Check if today is a variable holiday for the current year
    if (variableHolidays[year] && variableHolidays[year][dateKey]) {
        return true;
    }
    
    // Not a holiday
    return false;
}

function updateStatus(isWorking, localTime, indiaTime) {
    const statusElement = document.getElementById('status');
    const statusContainer = document.getElementById('status-container');
    const timeUntilElement = document.getElementById('time-until');
    
    // Check if today is a holiday
    const holidayName = getHolidayName(indiaTime);
    
    if (isWorking) {
        statusElement.textContent = 'YES, INDIA IS WORKING RIGHT NOW';
        statusContainer.className = 'status-container working';
        
        // Calculate time until India stops working
        const timeUntil = getTimeUntilStatusChange(indiaTime, true);
        const stopWorkingLocalTime = new Date(localTime.getTime() + timeUntil.milliseconds);
        
        timeUntilElement.innerHTML = `India will stop working in <strong>${
            timeUntil.hours === 0 ? '' : timeUntil.hours + ' hour' + (timeUntil.hours !== 1 ? 's' : '') + ' and '
        }${timeUntil.minutes} minute${timeUntil.minutes !== 1 ? 's' : ''}</strong>.<br>
        That's at <strong>${formatTime(stopWorkingLocalTime)}</strong> your local time.`;
    } else {
        statusElement.textContent = 'NO, INDIA IS NOT WORKING RIGHT NOW';
        statusContainer.className = 'status-container not-working';
        
        // Add holiday information if applicable
        if (holidayName && isWeekday(indiaTime) && isDuringWorkHours(indiaTime)) {
            statusElement.textContent += ` (${holidayName})`;
        }
        
        // Calculate time until India starts working
        const timeUntil = getTimeUntilStatusChange(indiaTime, false);
        const startWorkingLocalTime = new Date(localTime.getTime() + timeUntil.milliseconds);
        
        timeUntilElement.innerHTML = `India will start working in <strong>${
            timeUntil.hours === 0 ? '' : timeUntil.hours + ' hour' + (timeUntil.hours !== 1 ? 's' : '') + ' and '
        }${timeUntil.minutes} minute${timeUntil.minutes !== 1 ? 's' : ''}</strong>.<br>
        That's at <strong>${formatTime(startWorkingLocalTime)}</strong> your local time.`;
    }
}

function getHolidayName(date) {
    // Get date components
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    // Fixed holidays
    const fixedHolidays = {
        "01-26": "Republic Day",
        "08-15": "Independence Day",
        "10-02": "Gandhi Jayanti",
        "12-25": "Christmas",
    };
    
    if (fixedHolidays[dateKey]) {
        return fixedHolidays[dateKey];
    }
    
    // Variable holidays by year
    const variableHolidays = {
        // 2023 holidays
        "2023": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-08": "Holi",
            "04-07": "Good Friday",
            "04-22": "Eid ul-Fitr",
            "06-29": "Eid al-Adha",
            "08-30": "Raksha Bandhan",
            "09-07": "Janmashtami",
            "10-24": "Dussehra",
            "11-12": "Diwali",
            "11-27": "Guru Nanak Jayanti"
        },
        // 2024 holidays
        "2024": {
            "01-01": "New Year's Day",
            "01-15": "Makar Sankranti",
            "03-25": "Holi",
            "03-29": "Good Friday",
            "04-11": "Eid ul-Fitr",
            "06-17": "Eid al-Adha",
            "08-19": "Raksha Bandhan",
            "08-26": "Janmashtami",
            "10-12": "Dussehra",
            "11-01": "Diwali",
            "11-15": "Guru Nanak Jayanti"
        },
        // 2025 holidays
        "2025": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-14": "Holi",
            "04-18": "Good Friday",
            "04-01": "Eid ul-Fitr",
            "06-07": "Eid al-Adha",
            "08-09": "Raksha Bandhan",
            "08-15": "Janmashtami",
            "10-02": "Dussehra",
            "10-21": "Diwali",
            "11-05": "Guru Nanak Jayanti"
        },
        // 2026 holidays (projected dates)
        "2026": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-04": "Holi",
            "04-03": "Good Friday",
            "03-22": "Eid ul-Fitr",
            "05-29": "Eid al-Adha",
            "07-29": "Raksha Bandhan",
            "08-05": "Janmashtami",
            "09-21": "Dussehra",
            "10-10": "Diwali",
            "10-24": "Guru Nanak Jayanti"
        },
        // 2027 holidays (projected dates)
        "2027": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-24": "Holi",
            "03-26": "Good Friday",
            "03-12": "Eid ul-Fitr",
            "05-19": "Eid al-Adha",
            "08-17": "Raksha Bandhan",
            "08-25": "Janmashtami",
            "10-10": "Dussehra",
            "10-29": "Diwali",
            "11-13": "Guru Nanak Jayanti"
        },
        // 2028 holidays (projected dates)
        "2028": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-12": "Holi",
            "04-14": "Good Friday",
            "02-29": "Eid ul-Fitr",
            "05-07": "Eid al-Adha",
            "08-06": "Raksha Bandhan",
            "08-13": "Janmashtami",
            "09-28": "Dussehra",
            "10-17": "Diwali",
            "11-02": "Guru Nanak Jayanti"
        },
        // 2029 holidays (projected dates)
        "2029": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-02": "Holi",
            "03-30": "Good Friday",
            "02-18": "Eid ul-Fitr",
            "04-27": "Eid al-Adha",
            "07-26": "Raksha Bandhan",
            "08-02": "Janmashtami",
            "09-18": "Dussehra",
            "10-06": "Diwali",
            "10-22": "Guru Nanak Jayanti"
        },
        // 2030 holidays (projected dates)
        "2030": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-21": "Holi",
            "04-19": "Good Friday",
            "02-07": "Eid ul-Fitr",
            "04-16": "Eid al-Adha",
            "08-15": "Raksha Bandhan",
            "08-22": "Janmashtami",
            "10-08": "Dussehra",
            "10-26": "Diwali",
            "11-10": "Guru Nanak Jayanti"
        }
    };
    
    if (variableHolidays[year] && variableHolidays[year][dateKey]) {
        return variableHolidays[year][dateKey];
    }
    
    return null;
}

function isWeekday(date) {
    const day = date.getDay();
    return day >= 1 && day <= 5;
}

function isDuringWorkHours(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeInDecimal = hours + (minutes / 60);
    return timeInDecimal >= 9 && timeInDecimal < 18;
}

function getTimeUntilStatusChange(indiaTime, isCurrentlyWorking) {
    const day = indiaTime.getDay();
    const currentHours = indiaTime.getHours();
    const currentMinutes = indiaTime.getMinutes();
    
    let millisUntilChange = 0;
    
    if (isCurrentlyWorking) {
        // Calculate time until 6:00 PM today (end of workday)
        millisUntilChange = ((18 - currentHours - 1) * 60 + (60 - currentMinutes)) * 60 * 1000;
    } else {
        // If it's after work hours on a weekday
        if (day >= 1 && day <= 5 && currentHours >= 18) {
            // Time until 9:00 AM next day
            millisUntilChange = ((24 - currentHours + 9 - 1) * 60 + (60 - currentMinutes)) * 60 * 1000;
        } 
        // If it's before work hours on a weekday
        else if (day >= 1 && day <= 5 && currentHours < 9) {
            // Time until 9:00 AM today
            millisUntilChange = ((9 - currentHours - 1) * 60 + (60 - currentMinutes)) * 60 * 1000;
        }
        // If it's weekend (Saturday or Sunday)
        else {
            // Calculate days until Monday
            let daysUntilMonday = (day === 0) ? 1 : (8 - day);
            
            // Time until 9:00 AM on Monday
            millisUntilChange = (daysUntilMonday * 24 * 60 * 60 * 1000) - 
                               ((currentHours * 60 + currentMinutes) * 60 * 1000) + 
                               (9 * 60 * 60 * 1000);
        }
    }
    
    // Convert milliseconds to hours and minutes
    const totalMinutes = Math.floor(millisUntilChange / (60 * 1000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    return {
        hours,
        minutes,
        milliseconds: millisUntilChange
    };
}

function formatTime(date, isIndiaTime = false) {
    // Different formatting for local time vs. India time
    if (isIndiaTime) {
        // For India time, explicitly mention IST
        const timeStr = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).format(date);
        
        // Also get 12hr format
        const ampmStr = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(date);
        
        // Extract just the AM/PM part
        const ampm = ampmStr.slice(-2);
        
        return `${timeStr} (${ampm}) IST`;
    } else {
        // For local time, use the browser's timezone
        const timeStr = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZoneName: 'short'
        }).format(date);
        
        // Also get 12hr format
        const ampmStr = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(date);
        
        // Extract just the AM/PM part
        const ampm = ampmStr.slice(-2);
        
        return `${timeStr} (${ampm})`;
    }
} 