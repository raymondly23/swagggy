var React = require('react')
var styles = require('../../styles')

function Calendar() {
  return (
    <div className='center container'>
      <p>Calendar</p>
      <p>Updated pretty frequently</p>
      <div className="row">
        <div className="col s4">
        <div>
          <h5>April</h5>
          <p>27 - Nike Kyrie 2 - Team Red </p>
          <p>27 - Retro 10 NYC - Black/Gold</p>
          <p>30 - Retro 1 HI - 'Letterman'</p>
          <p>30 - Kids Retro 6 - Grey/Glow</p>
          <p>30 - Kids Retro 6 - White/Green/Mango</p>
        </div>
        <br/>
        <div>
          <h5>May</h5>
          <p>7 - Kids Retro 10 - Pearl/Black</p>
          <p>7 - Retro 10 - 'Rio'</p>
          <p>7 - Retro 9 Low - Bright Mango</p>
          <p>14 - Kids Retro 10 - Platinum/Pink</p>
          <p>14 - Retro 10 'Los Angeles'</p>
          <p>14 - Retro 10 - 'Chicago'</p>
          <p>21 - AJ XXX - Gym Red/Black</p>
          <p>21 - Retro 2 Low - White/Red</p>
          <p>21 - Kids Retro 6 - Black/Grey</p>
          <p>21 - Kids Retro 12 - White/University Blue</p>
          <p>28 - Retro 12 - 'Flu Game'</p>
          <p>29 - Retro 17+ - Black/Red</p>
        </div>
        </div>
        <div className="col s4">
        <div>
          <h5>June</h5>
          <p>11 - Retro 9 - 'Patone'</p>
          <p>18 - Retro 10 - 'Charlotte'</p>
          <p>20 - Nike KD 9 - Black/Red</p>
          <p>25 - Retro 12 - Grey/UNC</p>
          <p>? - Nike Foamposite - Yellow</p>
          <p>? - Retro 8 Champ - Black</p>
          <p>? - Retro 8 Champ - White</p>
          <p>? - Retro 4 Premium - Obsidian</p>
        </div>
        <br/>
        <div>
          <h5>July</h5>
          <p>2 - Retro 12 - Red/White</p>
          <p>16 - Retro 14 - Wh/Blk/Oxi Grn</p>
          <p>23 - Retro 5 - Black/Silver</p>
          <p>? - Nike Foamposite One - 'USA'</p>
          <p>? - Nike More Uptempo - 'USA'</p>
          <p>? - Nike More Uptempo - W/Gum</p>
          <p>? - Retro 12 OVO - White/Gold</p>
        </div>
        <br/>
        <div>
          <h5>August</h5>
          <p>13 - Retro 5 - White/Blk/Gold</p>
          <p>13 - Retro 14 - Black/Indigo</p>
          <p>16 - Retro 7 - Wh/Gold/Navy</p>
          <p>26 - Nike Foamposite Pro - Blue</p>
        </div>
        </div>
        <div className="col s4">
        <div>
          <h5>September</h5>
          <p>3 - Retro 1 HI OG - Black/Red</p>
          <p>24 - Retro 5 - Obsidian/Bronze</p>
        </div>
        <br/>
        <div>
          <h5>October</h5>
          <p>? - Retro 12 Wool - Dark Grey</p>
        </div>  
        <br/>      
        <div>
          <h5>November</h5>
          <p>25 - Retro 9 - White/Black</p>
          <p>25 - Retro 3 - White/True Blue</p>
          <p>28 - Retro 3 - 'Cyber Monday'</p>
        </div>        
        <br/>
        <div>
          <h5>December</h5>
          <p>? - Retro 11 - 'Space Jam'</p>
          <p>? - Retro 3 Wool - Dark Grey</p>
        </div>
        <br/>
        <div>
        <h5>Unknown Release Dates</h5>
        <p>? - Retro 11 Low - White/Red</p>
        <p>? - Retro 11 Low - Navy/Gum</p>
        <p>? - Retro 16 - White/Navy</p>
        <p>? - Retro 4 PRM - 'Snakeskin'</p>
        <p>? - Retro 13 Melo PE - 'Nuggets'</p>
        <p>? - Retro 13 Low - Chutney</p>
        <p>? - Retro 17 - White/Black/Red</p>
        <p>? - Retro 11 Low - White/Gold</p>
        <p>? - Flow - various colors</p>
        <p>? - Retro 1 KO HI - Black/Red</p>
        </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Calendar