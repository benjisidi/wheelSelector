# Wheel Selector

Wheel selector is a "wheel of fortune" style options spinner created using the p5.js library. In its current form, it isn't usable for anything useful, and was simply a challenge I set myself to create in 4 hours or less. You can adjust the number of segments using a slider, but I ran out of time before implementing editable text.

## Usage

Download the entire directory and either run something like [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html) or open *index.html* in your favourite browser. Alternatively, simply go to the [github pages site](https://benjisidi.github.io/wheelSelector/).

## File Structure

| File/Folder           | Contents                                                     |
| --------------------- | ------------------------------------------------------------ |
| *index.html*          | Simple page that just loads the js scripts                   |
| *Readme.md*           | This file                                                    |
| *sketch.js*           | Holds the p5.js *setup* and *draw* functions - creates the canvas, slider, buttons etc |
| *spinWheel.js*        | Contains the  spinWheel object: creates/tracks wheelSlice and ticker objects, and has functions to spin the wheel. |
| *style.css*           | Simply arranges everything horizontally if possible.         |
| *ticker.js*           | Holds the ticker object, which sizes and draws itself based on the given size of the wheel. |
| *wheelSlice.js*       | Holds the wheelSlice object, which sizes, and draws each segment of the wheel and its text. |
| *Libraries* directory | Contains the p5.js libraries.                                |

## Future Improvements

- A way to change the text
- A display of what segment was landed on
- A more visually appealing page to house the canvas and buttons
- An animation for the ticker so it appears to be pushed by each segment
