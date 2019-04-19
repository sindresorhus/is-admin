import {expectType} from 'tsd';
import isAdmin = require('.');

expectType<Promise<boolean>>(isAdmin());
