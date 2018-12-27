const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');

(new ConsoleLogger('test prefix', 'LOG')).log('ConsoleLogger!!!');
(new FileLogger('out_log.txt', 'test prefix', 'WARN')).log('FileLogger!!!');
(new DeferredFileLogger()).log('DeferredFileLogger!!!');