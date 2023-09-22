
import dash
from dash import Dash, dcc, html, Input, Output, callback,State
import plotly.express as px
import dash_bootstrap_components as dbc
import pandas as pd
import json
import sys
from process import *
from graphs import *
import dash_table
import plotly.graph_objects as go

app = Dash(__name__, external_stylesheets=[dbc.themes.MATERIA])

casedata = pd.read_excel('data/Case Management Data.xlsx')
spvreportdata = pd.read_excel('data/spvreportdata.xlsx')
news_df = pd.read_csv('data/newsdata.csv')
reddit_df = pd.read_csv('data/redditdata.csv')

spvreportdata.fillna(0,inplace=True)
spvreportdata.columns = ['Services','Type','Feb','Mar','Apr','May','Jun','Total']


labels = ['Identify','Collaborate & Track','Report']
source_filter_fig = go.Figure(data=[go.Pie(labels=labels,marker_colors = color_palette_discrete)])
source_filter_fig.update_traces(textposition='inside', textinfo='label')
source_filter_fig.update_layout(title="Source Filter",height=225,showlegend=False)



def show_news():
    #top_headlines_title = [str(translate(model,tok,top_headlines['articles'][i]['title'])[0]) for i in range(len(top_headlines['articles']))]
    top_headlines_title = [title for title in news_df['title']]
    top_headlines_url = [str(title) for title in news_df['link']]
    top_headlines_source = [str(title) for title in news_df['media']]

    top_headlines_date = [str(title) for title in news_df['date']]
    top_headlines_img = [title for title in news_df['img']]

    news_all= [dbc.Card([
                dbc.CardHeader([html.A(id="news_title_url",children=[top_headlines_title[i]],href=top_headlines_url[i])
                                    ,html.P("|"+top_headlines_source[i]+"|"+top_headlines_date[i])]),
                dbc.CardBody([

                              html.Img(src=top_headlines_img[i]
                                )]),
                ],
                color='secondary',style={"max-width":250,"height":250,"display":"flex","float":"left",  "margin": 20}) for i in range(len(top_headlines_title))]
    #top_headlines_sources
    # /v2/everything
    return news_all

identify_layout = html.Div(children=[
html.Br(),

 dbc.Row(
                        [
                             dbc.Col(html.Div(id='redd-cards', children=get_dash_table('reddit_df',reddit_df)),width=7),
                             dbc.Col(dbc.Card(html.Div(id='news-cards', children=show_news()),width=4))

                        ],
     justify="around"
                    )


])

app.layout = html.Div(
        [
    dbc.Row([

          dbc.Col(dbc.Card(dcc.Graph(id="source_filter_fig",figure=source_filter_fig)), width=11)
                ], justify="around"),
       html.Br(),html.Div(id='tabs-content-example-graph')
])





@app.callback(Output('tabs-content-example-graph', 'children'),
              Input('source_filter_fig', 'clickData'))
def render_content(source_filter_clickData):
    label = "Identify"
    print(source_filter_clickData)
    if source_filter_clickData:
        print(source_filter_clickData)
        label = str(source_filter_clickData["points"][0]["label"])

    if label == 'Identify':
        return identify_layout



if __name__ == "__main__":
    app.run_server(debug=True)
