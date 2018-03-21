# Basic read html

import urllib2
import re

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

# retry
def download3(url,num_retries=2):
    print 'Downloading:', url
    try:
        html = urllib2.urlopen(url).read()
    except urllib2.URLError as e:
        print 'Download error:',e.reason
        html = None
        if num_retries > 0:
            if hasattr(e,'code') and 500 <= e.code <600:
                # recursively retry 5xx HTTP errors
                return download3(url, num_retries-1)
    return html

# user agent
def download4(url,user_agent='wswp',num_retries=2):
    print 'Downloading:',url
    headers = {'User-agent':user_agent}
    request = urllib2.Request(url,headers=headers)
    try:
        html = urllib2.urlopen(request).read()
    except urllib2.HTTPError as e:
        print 'Download error:', e.reason
        html = None
        if num_retries > 0:
            if hasattr(e,'code') and 500 <= e.code <600:
                # recursively retry 5xx HTTP errors
                return download4(url,user_agent,num_retries-1)
    return html

# Site Map usage
def crawl_sitemap(url):
    # download the sitemap file
    sitemap = download4(url)
    # extract the sitemap links
    links = re.findall('<loc>(.*?)</loc>',sitemap)
    # download each link
    for link in links:
        html = download4(link)

# main Test
if __name__ == '__main__':
    download3('http://httpstat.us/500')
    