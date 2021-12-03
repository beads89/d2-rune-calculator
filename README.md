# Planning and Research Log

## Friday 12/3

* 8:00 - Come up with initial MVP and Stretch Goals
  ### Ideas
  * App w/unity or webpage 
    - Unity - Pull rune icons from Wiki and weapon types
      * _**MVP**_ Use a blanket slot type(all chests are dusk shrouds, etc.,) for all runewords. 
      * __Stretch__ for specific name type (Archon Plate, Ancient Armor, Phase Blade etc.,)
      * _**MVP**_ Save feature
      - __Stretch__ Profiles? Import/Export profiles?
    - Webpage - Same concept as Unity but HTML based and using SQL database to store info.
      * _**MVP**_ Login w/authentication?
      * __Stretch__ Host on Azure or AWS?

  * List of runes
  - _**MVP**_ 33 total
  - _**MVP**_ Dropdown for number of runes? Counter instead? .val insert w/number input?
  - __Stretch__ List by low, mid, high?
  - __Stretch__ Click function to take to specified page for runes and x number of runes before or after and Runewords possible with that rune.
  - __Stretch__ Use trade sheet(from Sanct Discord) to auto update current HR cost?
    * Have a link directly to xml, or find a way to import data from xml to webpage?

  * Runewords
    - _**MVP**_ Page with all runewords by level or name?
    - _**MVP**_ Page with specified armor/weapon types?(Page for chest, helm, shield, etc.,)
      * __Stretch__ Searchable filter on a left nav column (Filter like a shopping website)
    -

  ### Functionality

    * Homepage
      - _**MVP**_ Header to include links to "All Runes" "All Runewords"
        - __Stretch__ for showing all base types
        - _**MVP**_ Below header show runes implement either dropdown or spot to enter in amount.
          - Refer to draw.io layout
      - __Stretch__ always show left nav bar to filter


  ### Design

  * React.js front end?
    - Bootstrap styling?

  * C# back end?
    - Create custom database with all runes
    - WIP how to filter runes selected to show runewords able to create

-----  

* 9:00
  - Looking into maybe utilizing sounds from this bundle https://www.humblebundle.com/software/boom-royalty-free-sounds-music-audio?hmb_source=&hmb_medium=product_tile&hmb_campaign=mosaic_section_1_layout_index_1_layout_type_threes_tile_index_3_c_gamedevmusic_bundle. Finding previews - Found some but still undecided if wanting to use

  - Create template with "dotnet new react RunewordCalculator" https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-6.0&tabs=visual-studio. Need to look at Recommended content under Additional resources
-----

* 9:30
  - List of Runewords via Diablo 2 Wiki https://diablo2.diablowiki.net/Runewords stored
    * Rune list https://diablo2.diablowiki.net/Rune_list
      - Icons in RunewordCalculator/ClientApp/src/img sourced from https://diablo2.diablowiki.net/Rune_list

----------------------------------------------------------------

* 10:00
  - React CRUD with ASP.Net Core API Full Stack Tutorial https://www.youtube.com/watch?v=NemyDIUcC64 about 2hrs long





