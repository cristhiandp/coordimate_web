type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  city: string;
  address: string;
  rol: string;
};

type Event = {
  id: number;
  name: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

const USERS: Array<User> = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 29,
    gender: "female",
    city: "New York",
    address: "123 Main St, Apt 4B",
    rol: "admin",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    gender: "male",
    city: "Los Angeles",
    address: "456 Elm St, House 12",
    rol: "user",
  },
  {
    id: 3,
    name: "Clara Davis",
    email: "clara.davis@example.com",
    age: 42,
    gender: "female",
    city: "Chicago",
    address: "789 Oak St, Apt 101",
    rol: "moderator",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    age: 27,
    gender: "male",
    city: "Houston",
    address: "321 Maple Ave, Apt 3C",
    rol: "user",
  },
  {
    id: 5,
    name: "Eva Wilson",
    email: "eva.wilson@example.com",
    age: 31,
    gender: "female",
    city: "Phoenix",
    address: "654 Pine St, House 8",
    rol: "admin",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    age: 40,
    gender: "male",
    city: "Philadelphia",
    address: "987 Cedar Rd, House 9",
    rol: "user",
  },
  {
    id: 7,
    name: "Grace Taylor",
    email: "grace.taylor@example.com",
    age: 24,
    gender: "female",
    city: "San Antonio",
    address: "111 Birch Dr, Apt 22A",
    rol: "moderator",
  },
  {
    id: 8,
    name: "Henry Garcia",
    email: "henry.garcia@example.com",
    age: 38,
    gender: "male",
    city: "San Diego",
    address: "222 Palm St, House 14",
    rol: "user",
  },
];

const EVENTS: Array<Event> = [
  {
    id: 1,
    name: "Tech Conference 2024",
    type: "Conference",
    date: "15/10/2024",
    time: "09:30 am",
    location: "Los Angeles Convention Center",
    description:
      "A full-day event showcasing the latest trends in technology and innovation.",
  },
  {
    id: 2,
    name: "Music Festival",
    type: "Festival",
    date: "22/09/2024",
    time: "02:00 pm",
    location: "Central Park, New York",
    description:
      "A vibrant outdoor music festival featuring local and international artists.",
  },
  {
    id: 3,
    name: "Art Expo",
    type: "Exhibition",
    date: "05/11/2024",
    time: "11:00 am",
    location: "Art Gallery of Ontario, Toronto",
    description:
      "An art exhibition showcasing contemporary artists from around the world.",
  },
  {
    id: 4,
    name: "Charity Run",
    type: "Sports",
    date: "10/12/2024",
    time: "07:00 am",
    location: "Golden Gate Park, San Francisco",
    description:
      "A 5K charity run to raise funds for local children's hospitals.",
  },
  {
    id: 5,
    name: "Startup Pitch Night",
    type: "Business",
    date: "28/09/2024",
    time: "06:30 pm",
    location: "WeWork, Chicago",
    description:
      "A networking event for entrepreneurs to pitch their startup ideas to investors.",
  },
  {
    id: 6,
    name: "Culinary Workshop",
    type: "Workshop",
    date: "18/11/2024",
    time: "10:00 am",
    location: "Culinary Institute, Paris",
    description:
      "A hands-on workshop where participants learn to cook gourmet dishes from professional chefs.",
  },
  {
    id: 7,
    name: "Book Club Meetup",
    type: "Social",
    date: "07/10/2024",
    time: "05:00 pm",
    location: "Local Library, Seattle",
    description:
      "A monthly gathering to discuss the selected book of the month with fellow readers.",
  },
  {
    id: 8,
    name: "Film Premiere",
    type: "Entertainment",
    date: "25/11/2024",
    time: "08:00 pm",
    location: "Grauman's Chinese Theatre, Hollywood",
    description:
      "A red-carpet premiere of the latest blockbuster film with special appearances from the cast.",
  },
];

export { USERS, EVENTS };
export type { User, Event };
