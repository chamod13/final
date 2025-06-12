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
    doc15

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
  
]
