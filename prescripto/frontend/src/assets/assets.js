import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import logo from './logo.svg'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Dermatologist from './Dermatologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import appointment_img from './appointment_img.png'

export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    General_physician,
    Gynecologist,
    Dermatologist,
    Pediatricians,
    Neurologist,
    Gastroenterologist,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    appointment_img

}
export const specialityData = [
    {
        speciality: 'General Physician',
        image:General_physician
    },
    {
        speciality: 'Gynecologist',
        image:Gynecologist
    },
    {
        speciality:'Dermotologist',
        image:Dermatologist
    },
    {
        speciality:'Pediatricians',
        image:Pediatricians
    },
    {
        speciality:'Neurologist',
        image:Neurologist
    },
    {
        speciality:'Gastroenterologist',
        image:Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care',
        fee: 50,
        address: {
            line1: '17th Cross ,Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },

  
  {
    _id: 'doc2',
    name: 'Dr. Sarah Wilson',
    image: doc2,
    speciality: 'Pediatricians',
    degree: 'MD',
    experience: '8 Years',
    about: 'Specializes in child healthcare and development',
    fee: 75,
    address: {
      line1: '45 Maple Street',
      line2: 'Downtown, Manchester'
    }
  },
  {
  _id: 'doc3',
    name: 'Dr. Michael Lee',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '6 Years',
    about: 'Skin specialist with experience in cosmetic treatments',
    fee: 65,
    address: {
      line1: '89 Skinner Road',
      line2: 'Bayside, Liverpool'
    }
},

 {
    _id: 'doc4',
    name: 'Dr. Emma Brown',
    image: doc4,
    speciality: 'Neurologist',
    degree: 'MD, DM',
    experience: '12 Years',
    about: 'Focuses on brain and nervous system disorders',
    fee: 120,
    address: {
      line1: '22 Brain Street',
      line2: 'Uptown, Leeds'
    }
},

 {
    _id: 'doc4',
    name: 'Dr. Emma Brown',
    image: doc4,
    speciality: 'Neurologist',
    degree: 'MD, DM',
    experience: '12 Years',
    about: 'Focuses on brain and nervous system disorders',
    fee: 120,
    address: {
      line1: '22 Brain Street',
      line2: 'Uptown, Leeds'
    }
},

 {
    _id: 'doc6',
    name: 'Dr. Olivia Martinez',
    image: doc6,
    speciality: 'Gynecologist',
    degree: 'MBBS, DGO',
    experience: '7 Years',
    about: 'Women\'s health expert with a focus on maternity care',
    fee: 80,
    address: {
      line1: '66 Wellness Ave',
      line2: 'East End, Bristol'
    }
  },

  {
    _id: 'doc7',
    name: 'Dr. William Harris',
    image: doc7,
    speciality: 'ENT Specialist',
    degree: 'MS ENT',
    experience: '5 Years',
    about: 'Treats ear, nose, and throat disorders',
    fee: 70,
    address: {
      line1: '34 Sound Street',
      line2: 'Northern Quarters, Sheffield'
    }
  },

  {
    _id: 'doc8',
    name: 'Dr. Ava Thompson',
    image: doc8,
    speciality: 'Psychiatrist',
    degree: 'MD Psychiatry',
    experience: '11 Years',
    about: 'Helps patients with mental health and behavioral issues',
    fee: 90,
    address: {
      line1: '19 Calm Street',
      line2: 'Heartsfield, Nottingham'
    }
  },

  {
    _id: 'doc9',
    name: 'Dr. Daniel White',
    image: doc9,
    speciality: 'Urologist',
    degree: 'MS Urology',
    experience: '6 Years',
    about: 'Specialist in urinary and male reproductive health',
    fee: 85,
    address: {
      line1: '73 Stream Drive',
      line2: 'Southside, York'
    }
  },

  {
    _id: 'doc10',
    name: 'Dr. Mia Scott',
    image: doc10,
    speciality: 'Ophthalmologist',
    degree: 'MS Ophthalmology',
    experience: '10 Years',
    about: 'Expert in eye care and vision correction surgeries',
    fee: 100,
    address: {
      line1: '40 Vision Road',
      line2: 'East Park, Leicester'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. James Anderson',
    image: doc11,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Provides general medical consultation and primary care',
    fee: 50,
    address: {
      line1: '91 Health Lane',
      line2: 'Market District, Glasgow'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Charlotte King',
    image: doc12,
    speciality: 'Radiologist',
    degree: 'MD Radiology',
    experience: '8 Years',
    about: 'Expert in medical imaging and diagnostics',
    fee: 110,
    address: {
      line1: '52 Scan Blvd',
      line2: 'Riverbank, Newcastle'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Ethan Young',
    image: doc13,
    speciality: 'Pulmonologist',
    degree: 'MD, DM Pulmonology',
    experience: '7 Years',
    about: 'Specializes in respiratory system disorders',
    fee: 85,
    address: {
      line1: '29 Airway Street',
      line2: 'Downtown, Cardiff'
    }
  },

   {
    _id: 'doc14',
    name: 'Dr. Lily Robinson',
    image: doc14,
    speciality: 'Oncologist',
    degree: 'MD Oncology',
    experience: '13 Years',
    about: 'Treats cancer and manages chemotherapy treatments',
    fee: 150,
    address: {
      line1: '88 Hope Avenue',
      line2: 'Harborfront, Southampton'
    }
  },

  {
    _id: 'doc15',
    name: 'Dr. Benjamin Walker',
    image: doc15,
    speciality: 'Endocrinologist',
    degree: 'MD Endocrinology',
    experience: '9 Years',
    about: 'Focuses on hormonal disorders and diabetes management',
    fee: 95,
    address: {
      line1: '11 Hormone Street',
      line2: 'Central, Edinburgh'
    }
  }
]
