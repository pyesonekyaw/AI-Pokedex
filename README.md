#AI Pokedex - Pokemon Identifier
Using starter app for deploying [fast.ai](https://www.fast.ai) models on [Render](https://render.com)

The deployed model is trained on resnet34 provided by PyTorch, with an accuracy of 87% across all Pokemon. 

Web App can be found at https://aidex.onrender.com/

### Future Work
Make use of PokeAPI to provide detailed information about Pokemon identified, so as to act like an actual Pokedex as seen in the anime. 

### Changelog
9/2/2019 - Used a larger dataset of 70000 images of all 809 pokemon, with around 90 images of each Pokemon to retrain model. Data was acquired using Bing Image Search API. Data cleaning was done to remove incorrect images amongst the downloaded data through a modified version of Fast.ai's ImageCleaner. Achieved accuracy of 87%.
