#!/usr/bin/env node

import { calculator, message } from '../src/games/brain-calc.js';
import runGame from '../src/index.js';

runGame(calculator, message);
