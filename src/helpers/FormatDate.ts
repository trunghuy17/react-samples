 export const formatDate = (unixTime: number):string => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
}