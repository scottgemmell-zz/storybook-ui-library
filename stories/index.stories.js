import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, ButtonGroup } from "../src/atoms/";

storiesOf('Welcome', module)
	.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

	storiesOf('Button', module)
	.add('Default', () => (
		<Button>Default</Button>
	))
	.add('Primary', () => (
    	<Button modifier="primary">Primary</Button>
	));

storiesOf('ButtonGroup', module)
	.add('Default', () => (
		<ButtonGroup />
	))
