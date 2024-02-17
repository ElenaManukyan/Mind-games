#!/usr/bin/env node

import runGame from '../src/index.js';
import { progression, message } from '../src/brain-progression.js';

runGame(progression, message);
