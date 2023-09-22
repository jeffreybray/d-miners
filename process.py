import requests
import json
import pandas as pd



def get_top5_agg_df(GLOBAL_DF, path, top_n=False):
    GLOBAL_DF_cnts = GLOBAL_DF.groupby(path).size().reset_index()

    top_agg_df = GLOBAL_DF_cnts.groupby(path).apply(
        lambda x: x.sort_values([0], ascending=False)).reset_index(
        drop=True)
    top_agg_df.rename(columns={0: 'count'}, inplace=True)
    if top_n:
        agg_top10_df = top_agg_df.groupby(path).head(top_n)
        return agg_top10_df
    return top_agg_df
