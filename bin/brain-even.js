#!/usr/bin/env node

import runGame from '../src/index.js';
import { isEven, message } from '../src/games/brain-even.js';

runGame(isEven, message);
