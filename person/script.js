class Person {
    constructor(FirstName, LastName, Age, Gender, Qualification,Marks,Percentage, Skills ) {
      this.FirstName = FirstName;
      this.lastName = LastName;
      this.Age= Age;
      this.Gender = Gender;
      this.Qualification = Qualification;
      this.Marks = Marks;
      this.Percentage = Percentage;
      this.Skills = Skills;
        }
  
    getQualification() {
      return this.Qualification;
    
    }
    getPercentage() {
      return this.Percentage=this.Marks/6;
    
    }
  }
  
  const lilly= new Person("Lilly", "Kumar", 28,"Female","Bachelor of Computer Science",540,
    ["Leadershipskills","Team Leader","Extrovert","Quick Learner"]    
  );
  const Keerthi= new Person("Keerthi", "Sekar", 29,"Female","Bachelor of Computer Science",480,
    ["Good Communication","Team Coordination","Extrovert","Presentation Skills"]    
  );
  
  console.log(lilly);
  console.log(Keerthi);
  console.log(lilly.getQualification(),lilly.getPercentage());
  console.log(Keerthi.getQualification(), Keerthi.getPercentage());
  
  // /**
  //  * Inheritance
  //  * Derived Class
  //  */
   class FirstPerson extends Person {
     constructor(
      FirstName, LastName, Age, Gender, Qualification,Marks,Percentage, Skills,Nationality,Experience )
   {
       super(FirstName, LastName, Age, Gender, Qualification,Marks,Percentage, Skills,Nationality, Experience);
   this.Nationality = Nationality;
   this.Experience=Experience;
    }
   }
  
   const Details = new FirstPerson(
     "Lilly", "Kumar", 28,"Female","Bachelor of Computer Science",540,
    ["Leadershipskills","Team Leader","Extrovert","Quick Learner"] ,"Indian","HCL"  
   );
   console.log(Details);
  