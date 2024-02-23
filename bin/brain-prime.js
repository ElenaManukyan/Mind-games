#!/usr/bin/env node

import runGame from '../src/index.js';
import { primeNumber, message } from '../src/games/brain-prime.js';

runGame(primeNumber, message);
