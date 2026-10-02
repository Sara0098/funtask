// function calculateDiscount(amount, membership, items){
//     let itemCount = 0;
//     //count item using a loop
//     for(let i = 0 ; i <items.lenght; i++){
//         itemCount++
//     }
//     let discount = 0;


// //Amount discount  
// if (amount>= 50000){
//     discount = 20;
// }
// else if
//      (amount >= 20000){
//         discount = 10; 
// }

// //VIP discount 

// if (membership == "VIP"){
//     discount = 5;
// }

// // more then 10 itmes
// if ( itemCount > 10){
// discount += 3;
// }
// let discountAmount = amount * discount/100;
// let finalAmount = amount - discountAmount;
// return finalAmount;
// }

// // Example 
// let items = [
//      "Shirt",
//     "Shoes",
//     "Watch",
//     "Bag",
//     "Cap",
//     "Jeans",
//     "Jacket",
//     "Belt",
//     "Socks",
//     "T-shirt",
//     "Tie"
// ];

// let result = calculateDiscount(50000, "VIP",items);
// console.log("Final Amount : result");



function  createSchoolAdmissionSlip(studentName, fatherName, className,admissionDate, monthlyFee){



    //Remove extra spaces
    studentName = studentName.trim();
    fatherName = fatherName.trim();
    className  =className.trim()



    ///Converts names

      let student = studentName.toUpperCase();
      let father= fatherName.toLowerCase();



    //Get first 3 letter of student name 

    let firstLetter = studentName.charAt(0).toUpperCase();
    let  secondLetter = studentName.charAt(1).toLowerCase();
    let thirdLetter = studentName.charAt(2).toUpperCase();



    //Creat student ID

       let studentID = firstLetter.concat(secondLetter, thirdLetter, "2026");





//Calculate annual fee 
let annualFee = monthlyFee*12;


//creat admission slip 
let slip = "=====SCHOOL ADMISSION SLIP=====\n"

.concat("Student Name:", student," \n")
    .concat("Father Name :",  father, "\n")
    .concat("Class: ", className, "\n") 
    .concat("Admission Date: ", admissionDate, "\n")
     .concat("Student ID: ", studentID, "\n") 
     .concat("Monthly Fee: Rs. ", monthlyFee, "\n")
      .concat("Admission Status: Confirmed\n") 
    .concat("Total Annual Fee: Rs. ", annualFee);
    return slip

}
//function call
console.log(
    createSchoolAdmissionSlip(
        "Sara Zubair Ahmed",
        "Zubair Ahmed",
        "BS IT",
        "03-10-2026",
        5000
    )
);
