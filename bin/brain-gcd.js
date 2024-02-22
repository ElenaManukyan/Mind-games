#!/usr/bin/env node

import runGame from '../src/index.js';
import { largestCommonDivisor, message } from '../src/games/brain-gcd.js';

runGame(largestCommonDivisor, message);
