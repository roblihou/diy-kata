import { humanCatDogYears } from '../src'

describe('humanCatDogYears', () => {
    it('Returns an array holding 3 elements: human years, cat years, dog years', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    })

    it('Returns an array holding 3 elements: human years, cat years, dog years', () => {
        expect(humanCatDogYears(11)).toEqual([11, 60, 69]);
    })



})
  
