import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { NavLink } from 'react-router-dom';


const filter = createFilterOptions();

export default function SearchBar() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      name: '',
      email: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      email: parseInt(dialogValue.email, 10),
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
                email: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
              email: '',
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={users}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search name or email" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Is the user not on the list? Please, add it!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit"><NavLink to='/adduser' style={{textDecoration: 'none', color: '#6b95c7'}}>Add</NavLink></Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}


const users = [
  { name: 'Kyokonesa Delfin', email: 'ky-delfin@global-mobility-service.com' },
  { name: 'Joeren Christopher Lee', email: 'jo-lee@global-mobility-service.com' },
  { name: 'Kazumasa Nakashima', email: 'ka-nakashima@global-mobility-service.com' },
  { name: 'Dhanny Lou Sumilang', email: 'dh-sumilang@global-mobility-service.com' },
  { name: 'Yuria Wada', email: 'yu-wada@global-mobility-service.com' },
  { name: "Jose Angelito Laguio", email: 'jo-laguio@global-mobility-service.com' },
  { name: 'Eisaku Goto', email: 'ei-goto@global-mobility-service.com' },
  {
    name: 'Tsukasa Nakano',
    email: 'ts-nakano@global-mobility-service.com'
  },
  { name: 'Guadalupe Geraldez', email: 'gu-geraldez@global-mobility-service.com' },
  { name: 'Fight Club', email: 1999 },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    email: 2001,
  },
  {
    name: 'Star Wars: Episode V - The Empire Strikes Back',
    email: 1980,
  },
  { name: 'Forrest Gump', email: 1994 },
  { name: 'Inception', email: 2010 },
  {
    name: 'The Lord of the Rings: The Two Towers',
    email: 2002,
  },
  { name: "One Flew Over the Cuckoo's Nest", email: 1975 },
  { name: 'Goodfellas', email: 1990 },
  { name: 'The Matrix', email: 1999 },
  { name: 'Seven Samurai', email: 1954 },
  {
    name: 'Star Wars: Episode IV - A New Hope',
    email: 1977,
  },
  { name: 'City of God', email: 2002 },
  { name: 'Se7en', email: 1995 },
  { name: 'The Silence of the Lambs', email: 1991 },
  { name: "It's a Wonderful Life", email: 1946 },
  { name: 'Life Is Beautiful', email: 1997 },
  { name: 'The Usual Suspects', email: 1995 },
  { name: 'Léon: The Professional', email: 1994 },
  { name: 'Spirited Away', email: 2001 },
  { name: 'Saving Private Ryan', email: 1998 },
  { name: 'Once Upon a Time in the West', email: 1968 },
  { name: 'American History X', email: 1998 },
  { name: 'Interstellar', email: 2014 },
  { name: 'Casablanca', email: 1942 },
  { name: 'City Lights', email: 1931 },
  { name: 'Psycho', email: 1960 },
  { name: 'The Green Mile', email: 1999 },
  { name: 'The Intouchables', email: 2011 },
  { name: 'Modern Times', email: 1936 },
  { name: 'Raiders of the Lost Ark', email: 1981 },
  { name: 'Rear Window', email: 1954 },
  { name: 'The Pianist', email: 2002 },
  { name: 'The Departed', email: 2006 },
  { name: 'Terminator 2: Judgment Day', email: 1991 },
  { name: 'Back to the Future', email: 1985 },
  { name: 'Whiplash', email: 2014 },
  { name: 'Gladiator', email: 2000 },
  { name: 'Memento', email: 2000 },
  { name: 'The Prestige', email: 2006 },
  { name: 'The Lion King', email: 1994 },
  { name: 'Apocalypse Now', email: 1979 },
  { name: 'Alien', email: 1979 },
  { name: 'Sunset Boulevard', email: 1950 },
  {
    name: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    email: 1964,
  },
  { name: 'The Great Dictator', email: 1940 },
  { name: 'Cinema Paradiso', email: 1988 },
  { name: 'The Lives of Others', email: 2006 },
  { name: 'Grave of the Fireflies', email: 1988 },
  { name: 'Paths of Glory', email: 1957 },
  { name: 'Django Unchained', email: 2012 },
  { name: 'The Shining', email: 1980 },
  { name: 'WALL·E', email: 2008 },
  { name: 'American Beauty', email: 1999 },
  { name: 'The Dark Knight Rises', email: 2012 },
  { name: 'Princess Mononoke', email: 1997 },
  { name: 'Aliens', email: 1986 },
  { name: 'Oldboy', email: 2003 },
  { name: 'Once Upon a Time in America', email: 1984 },
  { name: 'Witness for the Prosecution', email: 1957 },
  { name: 'Das Boot', email: 1981 },
  { name: 'Citizen Kane', email: 1941 },
  { name: 'North by Northwest', email: 1959 },
  { name: 'Vertigo', email: 1958 },
  {
    name: 'Star Wars: Episode VI - Return of the Jedi',
    email: 1983,
  },
  { name: 'Reservoir Dogs', email: 1992 },
  { name: 'Braveheart', email: 1995 },
  { name: 'M', email: 1931 },
  { name: 'Requiem for a Dream', email: 2000 },
  { name: 'Amélie', email: 2001 },
  { name: 'A Clockwork Orange', email: 1971 },
  { name: 'Like Stars on Earth', email: 2007 },
  { name: 'Taxi Driver', email: 1976 },
  { name: 'Lawrence of Arabia', email: 1962 },
  { name: 'Double Indemnity', email: 1944 },
  {
    name: 'Eternal Sunshine of the Spotless Mind',
    email: 2004,
  },
  { name: 'Amadeus', email: 1984 },
  { name: 'To Kill a Mockingbird', email: 1962 },
  { name: 'Toy Story 3', email: 2010 },
  { name: 'Logan', email: 2017 },
  { name: 'Full Metal Jacket', email: 1987 },
  { name: 'Dangal', email: 2016 },
  { name: 'The Sting', email: 1973 },
  { name: '2001: A Space Odyssey', email: 1968 },
  { name: "Singin' in the Rain", email: 1952 },
  { name: 'Toy Story', email: 1995 },
  { name: 'Bicycle Thieves', email: 1948 },
  { name: 'The Kid', email: 1921 },
  { name: 'Inglourious Basterds', email: 2009 },
  { name: 'Snatch', email: 2000 },
  { name: '3 Idiots', email: 2009 },
  { name: 'Monty Python and the Holy Grail', email: 1975 },
];