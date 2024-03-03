#!/usr/bin/env node

import runGame from '../src/index.js';
import { changeProgression, message } from '../src/games/brain-progression.js';

runGame(changeProgression, message);
