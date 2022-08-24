export const customers = [
  { _id: "1", firstname: "Nikhil", lastName: "Pandit" },
  { _id: "2", firstname: "Sneha", lastName: "Gurav" },
  { _id: "3", firstname: "Pratiksha", lastName: "Bombarde" },
  { _id: "3", firstname: "Bhavesh", lastName: "Jain" },
  { _id: "3", firstname: "Samadhan", lastName: "Patil" },
  { _id: "3", firstname: "Ishwar", lastName: "sapkal" },
  { _id: "3", firstname: "Sneha", lastName: "Gorwade" },
  { _id: "3", firstname: "Vaibhav", lastName: "Lambey" },
  { _id: "3", firstname: "Shantanu", lastName: "Gawade" },
];

export function getCustomers() {
  return customers.filter((c) => c);
}
