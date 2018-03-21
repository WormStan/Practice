from bs4 import BeautifulSoup
import urllib2Test

def broken_html():
    # Understan broken html

    broken_html = '<ul class=country><li>Area</li><li>Population</ul>'
    # parse the HTML
    soup = BeautifulSoup(broken_html,'html.parser')
    fixed_html = soup.prettify()
    print fixed_html
    ul = soup.find('ul',attrs={'class':'country'})
    print ul.find('li') # returns just the first match
    print ul.find_all('li') # returns all matches




def country_data():
    # Get Country data
    url = 'http://example.webscraping.com/places/default/view/Afghanistan-1'
    html = urllib2Test.download4(url)
    soup = BeautifulSoup(html)
    tr = soup.find(attrs={'id':'places_area__row'}) # locate the area row
    td = tr.find(attrs={'class':'w2p_fw'}) # locate the area tag
    area= td.next # extract the text from this tab
    print area


if __name__ == '__main__':
    country_data()
    