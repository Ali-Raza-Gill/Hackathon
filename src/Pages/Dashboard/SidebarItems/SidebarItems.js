import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
const getRandomId =()=> Math.random.toString(36).slice(2)


export const items=[
    {
      key: getRandomId(),
      icon: <PersonAddIcon />,
      label:<Link to='/Student Management' >Management</Link>
    },
    {
      key: getRandomId(),
      icon: <PersonAddIcon />,
      label: <Link to="/students" >sudent</Link>,
    },
    {
      key: getRandomId(),
      icon: <PersonAddIcon />,
      label: 'item 3',
    },
  ]