import {expectType} from 'tsd';
import isAdmin from './index.js';

expectType<Promise<boolean>>(isAdmin());
