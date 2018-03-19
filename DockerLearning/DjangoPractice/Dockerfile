FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirments.txt /code/
RUN pip install -r requirments.txt
ADD . /code/
