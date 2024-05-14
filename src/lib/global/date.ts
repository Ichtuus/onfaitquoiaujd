class DateUtil {
    private date: Date;
  
    constructor(date: Date | string = new Date()) {
      this.date = new Date(date);
    }
  
    // Static method to create DateUtil instance from a date string
    static fromString(dateString: string): DateUtil {
      return new DateUtil(new Date(dateString));
    }
  
    // Method to format the date
    format(formatString: 'short' | 'long' | 'time'): string {
      const options = this.getFormatOptions(formatString);
      return this.date.toLocaleDateString(undefined, options);
    }
  
    // Private method to map format string to date format options
    private getFormatOptions(formatString: 'short' | 'long' | 'time'): Intl.DateTimeFormatOptions {
      switch (formatString) {
        case 'short':
          return { year: 'numeric', month: 'short', day: 'numeric' };
        case 'long':
          return { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        case 'time':
          return { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        default:
          return {};
      }
    }
  
    // Method to add days to the date
    addDays(days: number): DateUtil {
      const result = new Date(this.date);
      result.setDate(result.getDate() + days);
      return new DateUtil(result);
    }
  
    // Method to add months to the date
    addMonths(months: number): DateUtil {
      const result = new Date(this.date);
      result.setMonth(result.getMonth() + months);
      return new DateUtil(result);
    }
  
    // Method to add years to the date
    addYears(years: number): DateUtil {
      const result = new Date(this.date);
      result.setFullYear(result.getFullYear() + years);
      return new DateUtil(result);
    }
  
    // Method to get the difference in days between two dates
    static differenceInDays(date1: Date | string, date2: Date | string): number {
      const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  
    // Method to get the day of the week
    getDayOfWeek(): string {
      return this.date.toLocaleDateString(undefined, { weekday: 'long' });
    }
  
    // Method to get the month
    getMonth(): string {
      return this.date.toLocaleDateString(undefined, { month: 'long' });
    }
  
    // Method to get the year
    getYear(): number {
      return this.date.getFullYear();
    }
  
    // Method to get a raw JavaScript Date object
    toDate(): Date {
      return this.date;
    }
  }
  
  export default DateUtil;
  