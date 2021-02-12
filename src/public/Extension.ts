import { Context } from './Interfaces';

export abstract class FuncExtension {
    static RegisteredBeforeInvocation = {}
    static RegisteredAfterInvocation = {}

    abstract beforeInvocation(context: Context): void;

    abstract afterInvocation(context: Context): void;

    register(trigger_name: string): void {
        FuncExtension.RegisteredBeforeInvocation[trigger_name] = (
            this.beforeInvocation.bind(this)
        );

        FuncExtension.RegisteredAfterInvocation[trigger_name] = (
            this.afterInvocation.bind(this)
        );
    }
}