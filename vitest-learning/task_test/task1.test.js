import { describe, expect, test ,it} from 'vitest'
import {add,sub} from './task/task1.js'

describe('task1 test',()=>{
    test('',()=>{
        expect(add(1,2)).toBe(3)
    })
    it('',()=>{
        expect(sub(1,2)).toBe(-1)
    })
})