import lxml.html

# Test for git
# Broken Html

def BrokenHtml():
    broken_html = '<ul class=country><li>Area<li>Popolation</ul>'

    tree = lxml.html.fromstring(broken_html) # parse the HTML
    fixed_html = lxml.html.tostring(tree,pretty_print=True)
    print (fixed_html)


if __name__ == '__main__':
    BrokenHtml()