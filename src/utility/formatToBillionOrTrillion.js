const formatToBillionOrTrillion=(prize)=>{
    if (prize >= 1e12) {
        return "₹" +Math.round(prize / 1e12)+ "T";
    } else if (prize >= 1e9) {
        return "₹" +Math.round(prize / 1e9)+ "B";
    } 
}
export default formatToBillionOrTrillion;