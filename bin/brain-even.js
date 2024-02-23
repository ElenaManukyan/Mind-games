#!/usr/bin/env node

import runGame from '../src/index.js';
import { evenNumber, message } from '../src/games/brain-even.js';

runGame(evenNumber, message);
