import type { StudentCornerContent } from '@/types/studentCorner'

// Placeholder Student Corner text and documents - the backend will supply the real ones.
// Document urls are examples; the backend will supply real file links.
// Photos are free Unsplash images (Unsplash License) in public/images/student-corner/, cropped to 3:2:
//   cafeteria-hall: Shashank Raghuvanshi · cafeteria-thali: Zoshua Colah
//   mens-hostel-room: Aditya Karande · mens-hostel-corridor: Bhargav Panchal
//   womens-hostel-corridor: Akhilesh Ghatate · womens-hostel-lounge: Bipin Kumar Pal
//   womens-prayer-quran: Aoun Abbas · womens-prayer-rug: Sinan Toy
//   mens-prayer-congregation: Harsh Bhushan Sahu · mens-prayer-hall: Alim
//   college-bus: Sazeed Taj · roadways-bus: Siddharth
//   communication-lab: Poddar Group of Institutions · headset-practice: Sanket Mishra
// The Student Facilities overview reuses gallery photos from public/images/gallery/.
export const studentCornerContent: StudentCornerContent = {
  facilities: {
    images: [
      { url: '/images/gallery/g1.jpg', alt: 'College building and lawn' },
      { url: '/images/gallery/g5.jpg', alt: 'Students playing cricket on the college ground' },
    ],
    blocks: [
      {
        paragraphs: [
          'The college looks after students beyond the classroom. Use the buttons to read about each facility.',
        ],
      },
      {
        title: 'Facilities for students',
        points: [
          'Cafeteria with fresh, affordable food',
          'Separate hostels for men and women inside the campus',
          'Prayer halls for women and men',
          'College buses on five city routes',
          'English Communication Lab',
        ],
      },
      {
        title: 'Also on the campus',
        points: [
          'Free Wi-Fi across the campus',
          'RO drinking water on every floor',
          'First-aid room with a nurse',
          'Student counselling centre',
          'ATM, stationery and photocopy shop',
        ],
      },
    ],
  },

  cafeteria: {
    images: [
      { url: '/images/student-corner/cafeteria-hall.jpg', alt: 'Entrance of the college dining hall' },
      { url: '/images/student-corner/cafeteria-thali.jpg', alt: 'A vegetarian meal of rice, dal, vegetables and chapati on a steel plate' },
    ],
    blocks: [
      {
        paragraphs: [
          'The college cafeteria serves fresh, hygienic vegetarian and non-vegetarian food at subsidised prices for students and staff.',
        ],
      },
      {
        title: 'Timings',
        points: [
          'Breakfast: 7:30 am to 9:00 am',
          'Tea and snacks: 10:30 am to 11:00 am',
          'Lunch: 12:30 pm to 2:30 pm',
          'Tea and snacks: 3:30 pm to 5:00 pm',
        ],
      },
      {
        title: 'Facilities',
        points: [
          'Seating for 200 students',
          'Separate counter and seating area for women',
          'RO drinking water',
          'UPI and card payments accepted',
        ],
      },
    ],
  },

  mensHostel: {
    images: [
      { url: '/images/student-corner/mens-hostel-room.jpg', alt: 'Hostel room with bunk beds and sunlight from the windows' },
      { url: '/images/student-corner/mens-hostel-corridor.jpg', alt: 'Long corridor of the hostel block' },
    ],
    blocks: [
      {
        paragraphs: [
          "The men's hostel inside the campus has 120 rooms for 360 students, with a separate block for first-year students. A warden and two deputy wardens live on the premises.",
        ],
      },
      {
        title: 'Facilities',
        points: [
          'Furnished rooms for 2 or 3 students',
          '24-hour water supply and power backup',
          'Wi-Fi in every block',
          'Mess with vegetarian and non-vegetarian food',
          'Reading room, TV room and indoor games',
          'Gym and playground',
        ],
      },
      {
        title: 'Fees',
        points: [
          'Room rent: ₹18,000 per year',
          'Mess fee: about ₹3,500 per month (shared among residents)',
          'Caution deposit: ₹5,000 (refunded when you leave)',
        ],
      },
      {
        title: 'Rules',
        points: [
          'Residents must be back in the hostel by 8:00 pm.',
          "Visitors are allowed only on Sundays, 10:00 am to 5:00 pm, in the visitors' room.",
          'Ragging, smoking and alcohol are strictly banned.',
          'Leave must be approved by the warden.',
        ],
      },
    ],
  },

  womensHostel: {
    images: [
      { url: '/images/student-corner/womens-hostel-corridor.jpg', alt: 'Hostel corridor with a railing and potted plants' },
      { url: '/images/student-corner/womens-hostel-lounge.jpg', alt: 'Hostel common room with sofas' },
    ],
    blocks: [
      {
        paragraphs: [
          "The women's hostel is a secure building inside the campus with 90 rooms for 270 students. A lady warden and a resident matron stay on the premises.",
        ],
      },
      {
        title: 'Facilities',
        points: [
          'Furnished rooms for 2 or 3 students',
          'CCTV cameras and security guards round the clock',
          '24-hour water supply and power backup',
          'Wi-Fi in every block',
          'Mess with vegetarian and non-vegetarian food',
          'Reading room, TV room and indoor games',
        ],
      },
      {
        title: 'Fees',
        points: [
          'Room rent: ₹18,000 per year',
          'Mess fee: about ₹3,500 per month (shared among residents)',
          'Caution deposit: ₹5,000 (refunded when you leave)',
        ],
      },
      {
        title: 'Rules',
        points: [
          'Residents must be back in the hostel by 6:30 pm.',
          'Only parents and guardians named in the application form may visit.',
          'Residents may go out only with the warden’s permission.',
          'Ragging is strictly banned.',
        ],
      },
    ],
  },

  womensPrayerHall: {
    images: [
      { url: '/images/student-corner/womens-prayer-quran.jpg', alt: 'The Holy Quran on a wooden stand over a prayer mat' },
      { url: '/images/student-corner/womens-prayer-rug.jpg', alt: 'Prayer mat laid out in a quiet prayer room' },
    ],
    blocks: [
      {
        paragraphs: [
          "A separate, quiet prayer hall for women is on the first floor of the Women's Block. It is looked after by women staff.",
        ],
      },
      {
        title: 'Good to know',
        points: [
          'Open on all working days, 8:00 am to 5:00 pm',
          'Wash area with running water next to the hall',
          'Prayer timings are displayed at the entrance',
          'Please keep silence and leave footwear on the rack outside',
        ],
      },
    ],
  },

  mensPrayerHall: {
    images: [
      { url: '/images/student-corner/mens-prayer-congregation.jpg', alt: 'Men and boys standing in rows for congregational prayer' },
      { url: '/images/student-corner/mens-prayer-hall.jpg', alt: 'Prayer hall with green carpet rows and arched windows' },
    ],
    blocks: [
      {
        paragraphs: ['The prayer hall for men is near the Administrative Block and can hold 300 people at a time.'],
      },
      {
        title: 'Good to know',
        points: [
          'Open on all working days, 8:00 am to 5:00 pm',
          'Wash area with running water next to the hall',
          'Prayer timings are displayed at the entrance',
          'Please keep silence and leave footwear on the rack outside',
        ],
      },
    ],
  },

  transport: {
    images: [
      { url: '/images/student-corner/college-bus.jpg', alt: 'Front of a yellow college bus' },
      { url: '/images/student-corner/roadways-bus.jpg', alt: 'Bus on a city road' },
    ],
    blocks: [
      {
        paragraphs: [
          'College buses run on the routes below. Buses reach the college by 8:45 am and leave the campus at 4:15 pm.',
        ],
      },
      {
        title: 'Bus pass',
        points: [
          'Apply for a bus pass at the transport office during admission.',
          'The bus fee is for the whole year and is paid in one instalment.',
          'Show your bus pass and ID card when you board.',
        ],
      },
    ],
  },

  communicationLab: {
    images: [
      { url: '/images/student-corner/communication-lab.jpg', alt: 'Teacher helping students at computers in the lab' },
      { url: '/images/student-corner/headset-practice.jpg', alt: 'Student practising with a headset and microphone' },
    ],
    blocks: [
      {
        paragraphs: [
          'The English Communication Lab helps students improve listening, speaking, reading and writing through software-based lessons and practice sessions.',
        ],
      },
      {
        title: 'Facilities',
        points: [
          '40 computers with headsets and language-learning software',
          'Teacher console to monitor and talk to each student',
          'Audio-visual room for group discussions and mock interviews',
        ],
      },
      {
        title: 'Who can use it',
        points: [
          'First-year UG students have lab hours every week.',
          'Final-year students get placement training: group discussions, interviews and presentations.',
          'The lab is open for self-practice from 3:30 pm to 5:00 pm.',
        ],
      },
    ],
  },
}
