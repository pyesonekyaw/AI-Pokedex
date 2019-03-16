<p align="center">
  <img align="center" alt="Mockup" title="Mockup" src="https://i.ibb.co/QPDBnHF/pokedex.png" width="540" ></img>
</a>
</p>

<hr>

An AI-powered Pokemon webapp which can identify Pokemon inside images uploaded to it. The machine learning model has an accuracy of 87% and is based off the resnet34 architecture. 

Dataset used to train the model is made up of 70,000 images (before removal of duplicates and incorrect data) of Pokemon scrapped from the web, with around 90 images for each Pokemon. 

This project served as a proof-of-concept for a web-based Pokedex and a introduction to Javascript and fast.ai for myself. 

AI Pokedex can be found at https://aidex.onrender.com/

<hr>

### Future Work
Make use of PokeAPI to further provide detailed information about Pokemon identified.
Improve on the structure and architecture of the webapp to increase loading speeds and reduce the number of API calls required.
Improve accuracy of machine learning model by training on other architectures, acquiring and cleaning more data. 
Try to train a multi-character identification model although this would be hard with the lack of any pre-labelled image data on Pokemon.

<hr>

### Contributors

Open to contributors, need someone to refactor the code and reduce the amount of CSS.

### Changelog
* 9/2/2019 - Used a larger dataset of 70000 images of all 809 pokemon, with around 90 images of each Pokemon to retrain model. Data was acquired using Bing Image Search API. Data cleaning was done to remove incorrect images amongst the downloaded data through a modified version of Fast.ai's ImageCleaner. Achieved accuracy of 87%.

* 12/2/2019 - Updated web design to include a rudimentary Pokedex and a proper logo, through the use of PokeAPI.

* 13/2/2019 - Updated web design to include a region selector so that all 800+ Pokemon does not show up at once. 

<hr>

### Credits
The machine learning model is trained on [fast.ai](https://www.fast.ai). 
The webapp is hosted on [Render](https://render.com) and based off the starter app provided by [Render](https://render.com) for [fast.ai](https://www.fast.ai). 
Information on Pokemon such as sprites is obtained from [PokeAPI](https://pokeapi.co/). 
