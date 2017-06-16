import { OpaqueToken } from '@angular/core';

export const effectsConfig = new OpaqueToken('ngrx/effects: EffectsConfiguration');

export class EffectsConfiguration {
    registerEffectWithPrefix?: string;
}
