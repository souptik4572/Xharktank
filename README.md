# Xhark Tank

Shark Tank India was one of the most popular reality shows of India from November 2021 to
January 2022. Moreover it had become my most favourite reality show of all time. So this is my take
to create an online version of Shark Tank India for my first assignment submission at Crio.Do's
launch program. And by the way Crio was the one who gave me this idea. So all credit goes to Crio.

## Table of contents

-   [General info](#general-info)
-   [Technologies](#technologies)
-   [Setup](#setup)
-   [API Reference](#api-reference)

## General info

So now let us take a brief overview of what this project accomplishes. First things first. I believe
all of us are well aware of the Shark Tank TV serial right. For those who don't have any idea let me
give all of you a very brief introduction.

In Shark Tank entrepreneurs from all over India come and pitch their potential business ideas
infront of exprienced (and highly successfull) entrepreneurs. They young entrepreneurs offer to take
their guidance and some funding by providing them with an equity (a percentage) of their own
business. If the experienced entrepreneurs like their idea then they usually go ahead and offer them
a counter offer and finally complete their deal.

The Xhark Tank also works in a similar way, the young entrepreneurs can pitch an idea and ask for
some funding by giving away some equity and the investors can then invest in their idea by giving
them a counter offer.

## Technologies

This project is a backend specific project and is build with the following technologies:

-   NodeJS: 14.15.0
-   MongoDB: 5.0.6
-   ExpressJS: 4.17.3
-   Mongoose ORM: 6.2.9

## Setup

to run this project we need to execute the commands below:

```
<!-- Firstly we need to clone the project -->
git clone https://gitlab.crio.do/COHORT_ME_BUILDOUT_XHARKTANK_ENROLL_1648956266180/souptiksarkar4572-ME_BUILDOUT_XHARKTANK.git

<!-- Move in to the project directory -->
cd souptiksarkar4572-ME_BUILDOUT_XHARKTANK

<!-- Setting up all the necessary dependencies -->
chmod 755 setup.sh
./setup.sh

<!-- Running the server -->
chmod server_run.sh
./server_run.sh

<!-- And in ordr to stop the server -->
pm2 stop index.js
```

## API Reference

### Create New Pitch

```http
  POST /pitches
```

| Body Parameters | Type     | Description                                                                                      |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------- |
| `entrepreneur`  | `string` | **Required**. Name of the entrepreneur who is making the pitch                                   |
| `pitchTitle`    | `string` | **Required**. The complete pitch (product or business) title                                     |
| `pitchIdea`     | `string` | **Required**. The idea of the pitch or business                                                  |
| `askAmount`     | `float`  | **Required**. The amount asked by the entrepreneur for equity distribution                       |
| `equity`        | `float`  | **Required**. The alloted equity to be distributed <br> **Min Value:** 0 <br> **Max Value:** 100 |

Create a new pitch for a particular entrepreneur

### Get Pitch

```http
  GET /pitches/${pitchId}
```

| URL Parameter | Type     | Description                                        |
| :------------ | :------- | :------------------------------------------------- |
| `pitchId`     | `string` | **Required**. Unique id of the pitch to be fetched |

Fetch all details of a particular pitch which also includes the different offers received

### Get All Pitches

```http
  GET /pitches
```

Get all pitches along with their offers in reverse chronological order.

### Make a Counter Offer

```http
  POST /pitches/${pitchId}/makeOffer
```

| URL Parameter | Type     | Description                                                              |
| :------------ | :------- | :----------------------------------------------------------------------- |
| `pitchId`     | `string` | **Required**. Unique id of the pitch on which counter offer will be made |

| Body Parameters | Type     | Description                                                                                        |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------- |
| `investor`      | `string` | **Required**. Name of the investor who is raising the counter offer                                |
| `comment`       | `string` | **Required**. A small comment from the investor on why they are asking for a revised offer         |
| `amount`        | `float`  | **Required**. The revised amount for the counter offer asked by the investor                       |
| `equity`        | `float`  | **Required**. The equity share asked by the investor <br> **Min Value:** 0 <br> **Max Value:** 100 |

The investor can make a counter offer for a particular pitch
