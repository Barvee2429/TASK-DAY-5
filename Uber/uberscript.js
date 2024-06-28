class UberRide {
    constructor(Name, Mobile, Ride,PassengerCount, Distance,TotalPrice ) {
      this.Name = Name;
      this.Mobile = Mobile;
      this.Ride= Ride;
      this.PassengerCount = PassengerCount;
      this.Distance = Distance;
      this.TotalPrice = TotalPrice;     
    }   
    getFare()
    {
    return this.TotalPrice=this.Distance * 12; 
     }
      }
       
      
  const Passenger1= new UberRide("Lilly", 9786453210,"Karaikudi to Pudukottai",4,90);
    
  const Passenger2= new UberRide("Muthu", 9786458512,"Pudukottai to Trichy",7,110);
  
  console.log(Passenger1);
  console.log(Passenger2);
  console.log(Passenger1.Ride,Passenger1.getFare());
  console.log(Passenger2.Ride,Passenger2.getFare());
