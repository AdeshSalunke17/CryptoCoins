const formatPrize=(prize)=>{
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      }).format(prize);
}

export default formatPrize;