export const readableTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        
    })
}