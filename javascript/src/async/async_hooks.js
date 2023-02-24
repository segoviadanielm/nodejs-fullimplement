// previous to take this, we must know few concepts

/**
 * 
 * EXECUTION CONTEXT (red log storage, thread sessions, session context)
 * information hint what's the code can access and do things with that
 * 
 * 
 * REQUEST LEVEL Execution context 
 * Execution context for diferent request.
 * 
 * PERSISTEN REQUEST LEVEL EXECUTION CONTEXT / PRLEC
 * some practical uses like: Protection for multi-Tenant apps / request level caching / Preformance Measurements (profiling) / Enrich Stack Traces
 *
 * is an object with callback... can be multiple (like connection in net.createServer), or single like fs.open(); 
 * the class AsyncHood exposes an interface for traking lifetime events of asynchronous operations 
 */


import async_hooks, { AsyncResource, createHook, executionAsyncId } from 'node:async_hooks';
import fs, { writeFileSync } from 'node:fs';
import { format } from 'node:util';


import { stdout } from 'node:process';
import net from 'node:net';

console.log(AsyncResource.type)

// CONSOLE.LOG() IS ASYNCHRONOUS AND CALL AN ASYNC HOOK;

function debug(...args) {
    // Use a function like this one when debugging inside an AsyncHook callback
    writeFileSync('./log.out', `${format(...args)}\n`, { flag: 'a' });
  }

function init(asyncId, type, triggerAsyncId, resource)
{
    debug('init', asyncId, type, triggerAsyncId, resource);
}

function before(asyncId)
{
    debug('before init callback');
}

function after(asyncId)
{
    debug('after init callback');
}

function destroy(asyncId) 
{
    debug(`${asyncId} destroyed`);
}

function promiseResolve(asyncId)
{
    debug('yeahh');
}



// ID of the current execution context.
const eid = async_hooks.executionAsyncId();

const tid = async_hooks.triggerAsyncId();

const asyncHook = async_hooks.createHook({
    init, before, after, destroy, promiseResolve
});

// asyncHook.enable();

// asyncHook.disable();

createHook({
    init(asyncId, type, triggerAsyncId) {
        const eid = executionAsyncId();
        fs.writeSync(
            stdout.fd,
            `${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${eid}\n`);
    },

}).enable();

net.createServer((conn) => {}).listen(8080);