
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

casedata_Provider = pd.melt(spvreportdata, id_vars=['Type','Services'],value_vars=['Feb','Mar','Apr','May','Jun'],

        var_name='Month', value_name='Value')

# Define the labels and values hierarchically
labels = ["Identify", "Collaborate & Track", "Report"]
parents = ["", "", ""]

# Create a TreeMap figure
source_filter_fig = go.Figure(go.Treemap(
    labels=labels,
    parents=parents,
    marker_colors=color_palette_discrete,
    insidetextfont=dict(size=34)
))

# Customize the layout
source_filter_fig.update_layout(
    title="TreeMap with Labels",
    margin=dict(t=0, l=0, r=0, b=0)  # Adjust margins as needed
)
source_filter_fig.update_layout(title="Source Filter",height=100)



labels = ['19-25','25-59','60+']
values = [4,32,9]

age_fig = go.Figure(data=[go.Pie(labels=labels, values=values, hole=.3,textinfo='label+percent',marker_colors= ["#FFD166","#6A0572","#DA9B47","#00847A"])])
age_fig.update_layout(legend=dict(orientation="h", y=-0.2),title={"text": "Age-Ranges BreakDown",
                             "y":0.95,
                             "x":0.5,
                             "xanchor": "center",
                             "yanchor": "top"})


labels = ['Black/African American','American Indian/ Native Alaskan','Hispanic','White/Caucasian','Other/Mixed Race/Ethnicity']
values = [43, 1, 10,44,2]

racial_fig = go.Figure(data=[go.Pie(labels=labels, values=values, textinfo='label+percent',hole=.3,marker_colors= ["#FFD166","#6A0572","#DA9B47","#00847A"])])
racial_fig.update_layout(legend=dict(orientation="h", y=-0.2),title={"text": "Racial/Ethnic Makeup BreakDown",
                             "y":0.95,
                             "x":0.5,
                             "xanchor": "center",
                             "yanchor": "top"})



labels = ['Female','Male','Non-binary']
values = [60, 38, 2]

gender_fig = go.Figure(data=[go.Pie(labels=labels, values=values, hole=.3,textinfo='label+percent',marker_colors= ["#FFD166","#6A0572","#DA9B47","#00847A"])])
gender_fig.update_layout(legend=dict(orientation="h", y=-0.2),title={"text": "Racial/Ethnic Makeup BreakDown",
                             "y":0.95,
                             "x":0.5,
                             "xanchor": "center",
                             "yanchor": "top"})

casedata_Provider = pd.melt(spvreportdata, id_vars=['Type','Services'],value_vars=['Feb','Mar','Apr','May','Jun'],

        var_name='Month', value_name='Value')


news_count = get_top5_agg_df(casedata_Provider,['Type'])
spvreport_fig = px.pie(news_count,"Type","count",color_discrete_sequence =  ["#FFD166","#6A0572","#DA9B47","#00847A"])
spvreport_fig.update_layout(legend=dict(orientation="h", y=-0.2),title={
                             "y":0.95,
                             "x":0.5,
                             "xanchor": "center",
                             "yanchor": "top"})
spvreport_fig.update_layout(height = 700)


type = "Medical providers"
dff = casedata_Provider[(casedata_Provider["Type"] == type)]

bar_fig = bar_chart(dff,"Month", "Value","Month","Value", color="Services")

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
                              dbc.Col(dbc.Card(html.Div(id='news-cards', children=show_news())),width=4),
                             dbc.Col(html.Div(id='redd-cards', children=get_dash_table('reddit_df',reddit_df)),width=7)


                        ],
     justify="around"
                    )


])


report_layout = html.Div(children=[
                        dbc.Row(
                        [
                            dbc.Col(dcc.Graph(id="gender_fig",figure=gender_fig),width=3),
                            dbc.Col(dcc.Graph(id="racial_fig",figure=racial_fig),width=5),
                            dbc.Col(dcc.Graph(id="age_fig",figure=age_fig),width=3),
                        ],
                    ),

                   dbc.Row(
                        [
                            dbc.Col(dcc.Graph(id="spvreport_fig",figure=spvreport_fig),width=4),
                            dbc.Col(dcc.Graph(id="bar_fig",figure=bar_fig),width=7)
                        ],
                    )
])


app.layout = html.Div(
        [
        dbc.Col(
                html.H1("Springboard Collaborative Dashboard", style={"font-weight": "bold", 'textAlign': 'center'}),
                md=10),
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

    elif label == 'Report':
        return report_layout


if __name__ == "__main__":
    app.run_server(debug=True)
