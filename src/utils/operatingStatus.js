/**
 * Calculates live restaurant operating status based on Brisbane (Australia/Brisbane AEST) time.
 *
 * Schedule:
 * - Mon: Closed
 * - Tue - Thu: 17:30 PM - 21:00 PM
 * - Fri - Sat: 17:30 PM - 22:00 PM
 * - Sun: 17:30 PM - 21:00 PM
 */
export function getLiveOperatingStatus() {
  try {
    const brisbaneDateStr = new Date().toLocaleString('en-US', {
      timeZone: 'Australia/Brisbane'
    });
    const now = new Date(brisbaneDateStr);
    const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeInMinutes = hour * 60 + minute;

    // 17:30 = 1050 mins
    // 21:00 = 1260 mins
    // 22:00 = 1320 mins

    let isOpen = false;
    let closingTime = '';
    let nextOpen = '';

    if (day === 1) {
      // Monday: Closed
      isOpen = false;
      nextOpen = 'Opens Tue 5:30 PM';
    } else if (day >= 2 && day <= 4) {
      // Tue, Wed, Thu: 17:30 - 21:00
      if (timeInMinutes >= 1050 && timeInMinutes < 1260) {
        isOpen = true;
        closingTime = '9:00 PM';
      } else if (timeInMinutes < 1050) {
        isOpen = false;
        nextOpen = 'Opens Today 5:30 PM';
      } else {
        isOpen = false;
        nextOpen = day === 4 ? 'Opens Fri 5:30 PM' : 'Opens Tomorrow 5:30 PM';
      }
    } else if (day === 5 || day === 6) {
      // Fri, Sat: 17:30 - 22:00
      if (timeInMinutes >= 1050 && timeInMinutes < 1320) {
        isOpen = true;
        closingTime = '10:00 PM';
      } else if (timeInMinutes < 1050) {
        isOpen = false;
        nextOpen = 'Opens Today 5:30 PM';
      } else {
        isOpen = false;
        nextOpen = day === 6 ? 'Opens Sun 5:30 PM' : 'Opens Sat 5:30 PM';
      }
    } else if (day === 0) {
      // Sun: 17:30 - 21:00
      if (timeInMinutes >= 1050 && timeInMinutes < 1260) {
        isOpen = true;
        closingTime = '9:00 PM';
      } else if (timeInMinutes < 1050) {
        isOpen = false;
        nextOpen = 'Opens Today 5:30 PM';
      } else {
        isOpen = false;
        nextOpen = 'Opens Tue 5:30 PM';
      }
    }

    return {
      isOpen,
      badgeText: isOpen ? 'Open Now' : 'Closed Now',
      displayText: isOpen ? `Open Now (until ${closingTime})` : `Closed Now • ${nextOpen}`,
      statusColor: isOpen ? '#22c55e' : '#ef4444',
      nextAction: isOpen ? `Until ${closingTime}` : nextOpen
    };
  } catch (err) {
    // Fallback
    return {
      isOpen: false,
      badgeText: 'Closed Now',
      displayText: 'Closed Now • Opens 5:30 PM',
      statusColor: '#ef4444',
      nextAction: 'Opens 5:30 PM'
    };
  }
}
