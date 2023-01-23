import { sort, search, newsList } from "./main.js";

//Example testing for search function
describe("NEWS WEBSITE AUTOMATION TESTING", () => {
  describe("Search function with a matched keyword", () => {
    test("Search result should not be empty", () => {
      expect(search('aspiring')).not.toEqual(["No Result Found."])
    })
  
    test("Search result should return the expected record", () => {
      expect(search('aspiring')).toEqual([
        "What films should an aspiring journalist watch?",
        "What books should an aspiring journalist read?"
      ])
    })
    
    const expected = [expect.stringMatching(/^[BR]aspiring/)]
    test("All result does not match if received do not contain the search keyword", () => {
      expect(search('aspiring')).not.toEqual(expect.arrayContaining(expected))
    })
  })


  describe("Search function with no matched keyword", () => {
    test("Search result should 'No result found.'", () => {
      expect(search('asdfgh')).toEqual(["No Result Found."])
    })
  })


  describe("Sort Ascending", () => {
    test("Click filter Ascending button to sort the record in ascending order", () => {
      expect(sort("ascending")).toEqual([
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        "Buried underpants and tea bags help scientists evaluate soil",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Media glare can enrich tennis pros yet imperil mental health",
        "What books should an aspiring journalist read?",
        "What films should an aspiring journalist watch?"
      ])
    })
  })


  describe("Sort Descending", () => {
    test("Click filter Descending button to sort the record in descending order", () => {
      expect(sort("descending")).toEqual([
        "What films should an aspiring journalist watch?",
        "What books should an aspiring journalist read?",
        "Media glare can enrich tennis pros yet imperil mental health",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Buried underpants and tea bags help scientists evaluate soil",
        "'Nightmare' TV show 'Euphoria — health threat or high art?"
      ])
    })
  })
})