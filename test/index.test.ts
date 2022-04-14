import { describe, expect, test } from 'vitest'
import Dicts from '../src/index'

describe('runs', () => {
  test('words is not empty', () => {
    expect(Dicts.length).toBeGreaterThan(0)
  })
  test('words is impolite', () => {
    expect(Dicts).toContain('fuck')
    expect(Dicts).not.contain('brave')
  })
})
