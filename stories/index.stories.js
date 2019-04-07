import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, ButtonGroup } from "../src/library/atoms";

const options = {
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary'
  };

storiesOf('Welcome', module)
	.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

	storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Button onClick={action('clicked')}>Default</Button>
	))
	.add('Primary', () => (
    	<Button onClick={action('clicked')} modifier={`${select("Modifier", options, "primary")}`}>Primary</Button>
	));

storiesOf('ButtonGroup', module)
	.add('Default', () => (
		<ButtonGroup />
	))
