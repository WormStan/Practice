# Basic read html

import urllib2

def download(url):
    return urllib2.urlopen(url).read()

########################################

# With Error handle
def download2(url):
    print 'Downloading:', url
    try:
        html = urllib2.urlopen(url).read()
    except urllib2.URLError as e:
        print 'Download error:', e.reason
        html = None
    return html

########################################

# Could retry
def download3(url,num_retries=2):
    print 'Downloading:', url
    try:
        html = urllib2.urlopen(url).read()
    except urllib2.URLError as e:
        print 'Download error:',e.reason
        html = None
        if num_retries > 0:
            print e.errno
            if hasattr(e,'code') and 500 <= e.errno <600:
                # recursively retry 5xx HTTP errors
                return download3(url, num_retries-1)
    return html

# main Test
if __name__ == '__main__':
    download3('http://httpstat.us/500')
    