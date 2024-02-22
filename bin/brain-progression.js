#!/usr/bin/env node

import runGame from '../src/index.js';
import { progression, message } from '../src/games/brain-progression.js';

runGame(progression, message);
