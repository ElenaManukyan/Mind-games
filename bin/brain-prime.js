#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { isPrimeNumber, message } from '../src/brain-prime.js';

runGame(isPrimeNumber, message);
