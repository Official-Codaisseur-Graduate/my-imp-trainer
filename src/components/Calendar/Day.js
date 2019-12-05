import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function Day(props) {
  const { calendar } = props;
  const { day } = props;
  const { workouts } = props;
  console.log('Calendar:', calendar);
  console.log('Day:', day);
  console.log('Workouts:', workouts);

  const images = [
    {
      image: 'https://source.unsplash.com/featured/?{weightlifting}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{gym}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{crossfit}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{fitness}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{barbells}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{bodybuilding}'
    },
    {
      image: 'https://source.unsplash.com/featured/?{trainer}'
    }
  ];

  const second = day.workouts.length !== 0 ? `${day.workouts.length} workouts` : `Rest day`;

  const workout = day.workouts[0];

  const filtered = workouts.map((object) => {
    return object.title;
  });

  const workoutOne = calendar.map((object) => {
    return object.workouts[0];
  });

  const workoutTwo = calendar.map((object) => {
    return object.workouts[1];
  });

  const mappedId = workouts.map((object) => {
    return object.id;
  });

  const mappedTitle = workouts.map((object) => {
    return object.title;
  });

  console.log('Workout:', workout);
  console.log('filtered:', filtered);
  console.log('workoutOne:', workoutOne);
  console.log('workoutTwo:', workoutTwo);
  console.log('mappedId:', mappedId);
  console.log('mappedTitle:', mappedTitle);

  const firstWorkout = () => {
    if (workoutOne === 1) {
      return mappedTitle[0];
    } else if (workoutOne === 2) {
      return mappedTitle[1];
    } else if (workoutOne === 3) {
      return mappedTitle[2];
    } else if (workoutOne === 4) {
      return mappedTitle[3];
    } else if (workoutOne === 5) {
      return mappedTitle[4];
    }
  };

  const secondWorkout = () => {
    if (workoutTwo === 1) {
      return mappedTitle[0];
    } else if (workoutTwo === 2) {
      return mappedTitle[1];
    } else if (workoutTwo === 3) {
      return mappedTitle[2];
    } else if (workoutTwo === 4) {
      return mappedTitle[3];
    } else if (workoutTwo === 5) {
      return mappedTitle[4];
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={images[day.id - 1].image} alt='' />
          {/* style={{ width: '60px' }}  */}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`Day ${day.day}, ${second}`} secondary={firstWorkout()} />
      {/* secondary='Two workouts' */}
    </ListItem>
  );
}
